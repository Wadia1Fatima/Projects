import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

export default function ImgSlider({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([])
    const [currentImg, setCurrentImg] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {

        setLoading(true)
        try {
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
    }, [url])

    function handlePrevious() {
        setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1)
    }

    function handleNext() {
        setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1)
    }


    if (loading) {
        return (
            <div>Loading Data, Please Wait !</div>
        )
    }

    if (errorMsg !== null) {
        return (
            <div>Opps, an Error Occurred ! {errorMsg}</div>
        )
    }

    return (
        <div className="box">
            <h1>Image Slider</h1>
            <div className="container">
                <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
                {
                    images && images.length
                        ? images.map((imageItem, index) => (
                            <img
                                key={imageItem.id}
                                src={imageItem.download_url}
                                alt={imageItem.download_url}
                                className={currentImg === index
                                    ? "current-image"
                                    : "current-image hide-current-image"
                                }
                            />
                        ))
                        : null
                }
                <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
                <span className="circle-indicator">
                    {
                        images && images.length
                            ? images.map((_, index) => (<button
                                key={index}
                                className={currentImg === index
                                    ? "current-indicator"
                                    : "current-indicator inactive-indicator"}
                                onClick={() => setCurrentImg(index)}
                                ></button>
                            ))
                            : null
                    }
                </span>
            </div>
        </div>
    )
}