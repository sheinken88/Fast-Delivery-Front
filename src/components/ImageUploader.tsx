import React, { type FC, useRef, useState } from 'react'

interface ImageUploaderProps {
    selectedImage: string
    setSelectedImage: (image: string) => void
}

const ImageUploader: FC<ImageUploaderProps> = ({
    selectedImage,
    setSelectedImage,
}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [croppedImage, setCroppedImage] = useState<string | null>(null)

    const handleImageUpload = () => {
        if (fileInputRef.current !== null) {
            fileInputRef.current.click()
        }
    }

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file !== undefined) {
            const reader = new FileReader()

            reader.onload = (event) => {
                if (event.target?.result !== undefined) {
                    const image = new Image()
                    image.src = event.target.result as string

                    image.onload = () => {
                        const canvas = document.createElement('canvas')
                        const ctx = canvas.getContext('2d')

                        if (ctx !== null) {
                            canvas.width = 56
                            canvas.height = 56

                            ctx.drawImage(image, 0, 0, 56, 56)
                            const croppedDataURL =
                                canvas.toDataURL('image/jpeg')
                            setCroppedImage(croppedDataURL)
                            setSelectedImage(croppedDataURL)
                        }
                    }
                }
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div
            className="flex justify-center items-center cursor-pointer"
            style={{ backgroundColor: 'lightgrey', height: 120 }}
            onClick={handleImageUpload}
        >
            <input
                type="file"
                name="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileInputChange}
            />
            {croppedImage !== null ? (
                <img
                    src={croppedImage}
                    alt="Selected Image"
                    className="cursor-pointer border rounded-full"
                    style={{ height: 80, width: 80 }}
                />
            ) : (
                <img
                    src={selectedImage}
                    alt="Selected Image"
                    className="cursor-pointer border rounded-full"
                    style={{ height: 80, width: 80 }}
                />
            )}
        </div>
    )
}

export default ImageUploader
