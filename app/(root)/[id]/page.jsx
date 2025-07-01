import data from '@/lib/data.json';

const getGalleryDetails = (id) => {
    return data.find((item) => item.id === id);
};

async function DetailsPage({params}) {
    const {id} = await params;
    const details = getGalleryDetails(id);
    const {
        name: artName,
        year,
        description,
        source,
        artist: {image: artistImage, name: artistName},
        images: {
            thumbnail,
            hero: {small, large},
            gallery,
        },
    } = details;

    return (
        <div className="details-wrapper flex">
            {/* Main Gallery */}
            <div className="gallery-wrapper">
                {/* hero large */}
                <div className="hero-wrapper">
                    <button
                        className="view-image-btn flex uppercase"
                        type="button">
                        <img
                            src="./assets/shared/icon-view-image.svg"
                            alt="icon-view-image"
                        />
                        <span className="fs-10 text-white fw-700 letter-spacing-3">
                            View image
                        </span>
                    </button>
                    <img className="hero-img" src={large} alt={artName} />
                </div>

                {/* hero small */}
                {/* <img src="" alt="" /> */}

                {/* Artist Details */}

                <div className="artist-details-wrapper">
                    <div className="artist-details">
                        <div className="artist-info flex">
                            <p className="art-name text-preset-2 fw-700 text-black">
                                {artName}
                            </p>
                            <p className="lh-135 fs-15 text-grey-400">
                                {artistName}
                            </p>
                        </div>
                        <img
                            className="artist-img"
                            src={artistImage}
                            alt={artistName}
                        />
                    </div>
                </div>
            </div>

            {/* Description, year, and source */}
            <div className="details-copy grid">
                <p className="year text-grey-100 text-preset-1 fw-700">
                    {year}
                </p>

                <div className="desc-source-wrapper flex">
                    <p className="description fs-14 text-grey-400 fw-700 ls-2 lh-200">
                        {description}
                    </p>
                    <a
                        className="source"
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer">
                        <span className="text-grey-400 fs-9 fw-700 ls-3 lh-125 uppercase">
                            go to source
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;
