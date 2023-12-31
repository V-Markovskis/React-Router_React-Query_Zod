import '../App.css'
import React, {useState} from "react";
import IMovie from "../Types/movieType.tsx";
import validateImageUrl from "../functionsValidation/validateImageUrl.tsx";


type InitialFormProps = {
    initFormValue: IMovie,
    currentId: number,
    createMovie: (movie: IMovie) => void
    isLoading: boolean
}


const InitialForm = ({ initFormValue, currentId, createMovie, isLoading }: InitialFormProps) => {

    const [formValues, setFormValues] = useState(initFormValue);

    return (
        <>
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault();

                createMovie({
                    ...formValues,
                    id: currentId + 1,
                    image: validateImageUrl(formValues.image)
                });
                setFormValues(initFormValue);

            }}>
                <h2 className='form-container_header'>Add new movie</h2>
                <label htmlFor="nickname">Your Nickname:</label>
                <input
                    type="text"
                    name="nickname"
                    value={formValues.nickname}
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            nickname: e.target.value
                        })
                    }}
                    required
                    placeholder="Enter your nickname"
                    className="review-main-details"
                />

                <label htmlFor="movie title">Enter Movie:</label>
                <input
                    type="text"
                    name="movie title"
                    value={formValues.movie}
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            movie: e.target.value
                        })
                    }}
                    required
                    placeholder="Movie to be discussed"
                    className="review-main-details"
                />

                <label htmlFor="review">Your review:</label>
                <textarea
                    name="review"
                    rows={4}
                    cols={50}
                    value={formValues.review}
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            review: e.target.value
                        })
                    }}
                    required
                    placeholder="Enter your thoughts"
                    className="review-main-details"
                    maxLength={200}
                ></textarea>

                <label htmlFor="evaluation">Movie score:</label>
                <input
                    type="number"
                    name="evaluation"
                    value={formValues.evaluation}
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            evaluation: e.target.value
                        })
                    }}
                    required
                    placeholder="Evaluation (1-10)"
                    min="1"
                    max="10"
                    className="review-main-details"
                />
                <label htmlFor="Image URL">Image URL:</label>
                <input
                    type="text"
                    name="Image URL"
                    value={formValues.image}
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            image: e.target.value
                        })
                    }}
                    required
                    placeholder="Enter image URL"
                    className="review-main-details"
                    width={200}
                    height={200}
                    style={{objectFit: "cover"}}
                />
                <div className='button-container'>
                    <button className="submit-button" disabled={isLoading}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default InitialForm
