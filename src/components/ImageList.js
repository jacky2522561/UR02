import ImageShow from './ImageShow';
function ImageList({ Image }) {
    const rerenderImage = Image.map((image) => {
        return (
            <div>
                <ImageShow key={image.id} image={image} />
            </div>
        )
    })
    return (
        <div>
            {rerenderImage}
        </div>
    )
}

export default ImageList;