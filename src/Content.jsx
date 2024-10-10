


const Content = () => {

    const wallpapers = [
        {id: 1, name: 'wallpaper1'}
    ]

    return(
        <main>
            <h2>The Collection</h2>
            <h3>New Releases</h3>
            <section className="new-release-container">
            <a href=""><img src='' alt=""/></a>
            <a href=""><img src='' alt=""/></a>
            <a href=""><img src='' alt=""/></a>
            <a href=""><img src='' alt=""/></a>
            </section>
            <h3>Featured Wallpapers</h3>
            <section className="Featured-container">
            <a href=""><img src='' alt=""/></a>
            <a href=""><img src='' alt=""/></a>
            <a href=""><img src='' alt=""/></a>
            <a href=""><img src='' alt=""/></a>
            </section>
        </main>
    )
}

export default Content