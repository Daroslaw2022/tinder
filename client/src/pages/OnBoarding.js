import Nav from "../components/Nav"
import { useState } from "react"

const OnBoarding = () => {
    const[formData, setFormData] = useState({
        user_id: '',
        first_name: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_gender: false,
        gender_indentity: 'man',
        gender_interest: 'woman',
        email: '',
        url: '',
        about: '',
        matches: []
    })

    const handleSubmit = () => {
        console.log('submited')
    }

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    console.log(formData)

    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => { }}
                showModal={false}
            />
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-indentity"
                                type="radio"
                                name="gender_indentity"
                                value={"man"}
                                onChange={handleChange}
                                checked={formData.gender_indentity === 'man'}
                            />
                            <label htmlFor="man-gender-indentity">Man</label>
                            <input
                                id="woman-gender-indentity"
                                type="radio"
                                name="gender_indentity"
                                value={"woman"}
                                onChange={handleChange}
                                checked={formData.gender_indentity === 'woman'}
                            />
                            <label htmlFor="woman-gender-indentity">Woman</label>
                            <input
                                id="more-gender-indentity"
                                type="radio"
                                name="gender_indentity"
                                value={"more"}
                                onChange={handleChange}
                                checked={formData.gender_indentity === 'more'}
                            />
                            <label htmlFor="more-gender-indentity">More</label>
                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />
                        <label>Show me</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value={"man"}
                                onChange={handleChange}
                                checked={formData.gender_interest === 'man'}
                            />
                            <label htmlFor="man-gender-interest">Man</label>
                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value={"woman"}
                                onChange={handleChange}
                                checked={formData.gender_interest === 'woman'}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>
                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value={"everyone"}
                                onChange={handleChange}
                                checked={formData.gender_interest === 'everyone'}
                            />
                            <label htmlFor="everyone-gender-interest">Everyone</label>
                        </div>
                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks.."
                            value={formData.about}
                            onChange={handleChange}
                        />
                        <input type="submit" />
                    </section>

                    <section>
                        <label htmlFor="about">Profile Profile</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            <img src={formData.url} alt="profile pic preview"/>
                        </div>



                    </section>
                </form>

            </div>
        </>
    )
}
export default OnBoarding