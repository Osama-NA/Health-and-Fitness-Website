import { activityLevels } from '../../utils/data';
import Loader from './Loader'
import {useState} from 'react'

const requestOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};

const getFormDataValuesObject = (age, gender, height, weight, activityLevel) => {
    return {
        age: age.value, 
        gender: gender.value, 
        height: height.value, 
        weight: weight.value, 
        activityLevel: activityLevel.value
    }
}

const getCalorieCalculatorApiRequestUrl = (data) => {
    return `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${data.age}&gender=${data.gender}&height=${data.height}&weight=${data.weight}&activitylevel=${data.activityLevel}`
}

const validateFormData = (data) => {
    if(data.age < 15 || data.age > 80){
        alert('Age must be between 15 and 80')
        return false;
    }
    if(data.gender !== "male" && data.gender !== "female"){
        alert('Please select a gender')
        return false;
    }
    if (data.height < 130 || data.height > 230) {
        alert('Height must be between 130 and 230')
        return false;
    }
    if (data.weight < 40 || data.weight > 160) {
        alert('Weight must be between 40 and 160')
        return false;
    }
    return true;
}

const getRequiredCalculationData = (data) => {
    return [
        {
            goal: 'Maintain weight',
            calory: Math.ceil(data["maintain weight"])
        },
        {
            goal: 'Mild weight loss',
            calory: Math.ceil(data["Mild weight loss"].calory),
            weight: `${data["Mild weight loss"]["loss weight"]} / week`
        },
        {
            goal: 'Weight loss',
            calory: Math.ceil(data["Weight loss"].calory),
            weight: `${data["Weight loss"]["loss weight"]} / week`
        },
        {
            goal: 'Extreme weight loss',
            calory: Math.ceil(data["Extreme weight loss"].calory),
            weight: `${data["Extreme weight loss"]["loss weight"]} / week`
        },
        {
            goal: 'Mild weight gain',
            calory: Math.ceil(data["Mild weight gain"].calory),
            weight: `${data["Mild weight gain"]["gain weight"]} / week`
        },
        {
            goal: 'Weight gain',
            calory: Math.ceil(data["Weight gain"].calory),
            weight: `${data["Weight gain"]["gain weight"]} / week`
        },
        {
            goal: 'Extreme weight gain',
            calory: Math.ceil(data["Extreme weight gain"].calory),
            weight: `${data["Extreme weight gain"]["gain weight"]} / week`
        }
    ]
}

const CalorieCalculator = ({ setCalculationResult}) => {
     //used to display loader while waiting for results from api request
    const [showLoader, setShowLoader] = useState(false);

    const handleCalculateSubmit = async (e) => {
        e.preventDefault();
        setShowLoader(true);

        // get user input from form
        const { age, gender, height, weight, activity } = e.target;
        // format user input as an object
        const formData = getFormDataValuesObject(age, gender, height, weight, activity)
        // validate user input 
        const isValidInputs = validateFormData(formData);

        if(!isValidInputs) return;

        // get calorie calculator api request url after adding user input to query parameters
        const requestUrl = getCalorieCalculatorApiRequestUrl(formData)
        // Make a call to the calorie calculator api
        const calculationResponse = await fetch(requestUrl, requestOptions);
        const calculationResult = await calculationResponse.json();

        // If successful api call get required data from api response and store it as array in calculationResult
        if (calculationResult.status_code === 200){
            const requiredCalculationData = getRequiredCalculationData(calculationResult.data.goals)
            setCalculationResult(requiredCalculationData)
        }else{
            alert('Bad request please try again')
        }

        setShowLoader(false);
        e.target.reset()
    }
    
    return (
        <section className="calorie-calculator">
            <h2>Calorie Calculator</h2>
            <p className="about-calculator">
                This Calorie Calculator can be used to estimate the number of calories 
                a person needs to consume each day.
            </p>

            <form className="calculator-container" onSubmit={handleCalculateSubmit}>
                <div className="field-group">
                    <div className="input-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" max="80" min="15" name="age" required placeholder="15 - 80" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="gender">Gender</label>
                        <div className="radio-group" required>
                            <input type="radio" id="male" name="gender" value="male" required/>
                            <label htmlFor="male">male</label>
                            <input type="radio" id="female" name="gender" value="female" required />
                            <label htmlFor="female">female</label>
                        </div>
                    </div>
                </div>

                <div className="field-group">
                    <div className="input-group">
                        <label htmlFor="height">Height</label>
                        <input type="number" max="230" min="130" name="height" required placeholder="130 - 230" />
                        <span>cm</span>
                    </div>
                    <div className="input-group">
                        <label htmlFor="weight">Weight</label>
                        <input type="number" max="160" min="40" name="weight" required placeholder="40 - 160" />
                        <span>kg</span>
                    </div>
                </div>

                <div className="input-group">
                    <label htmlFor="activity">Activity</label>
                    <DropDownSelect options={activityLevels} name="activity" />
                    <span className="select-btn">{`>`}</span>
                </div>

                <div className="calculator-buttons">
                    <button type="reset">Clear values</button>
                    <button type="submit">
                        <i className="fa-solid fa-circle-chevron-right" />
                        <span>Calculate</span>
                    </button>
                </div>
            </form>

            {showLoader && <Loader />}
        </section>
    )
}

const DropDownSelect = ({options, name}) => {
    return (
        <select name={name}>
            {options.map((option, i) => <option value={option.level} key={i}>{option.value}</option>)}
        </select>
    )
}

export default CalorieCalculator;