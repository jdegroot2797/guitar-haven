const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Homepage = async () => {
    await delay(2000)
    return <>Guitar Haven</>;
}

export default Homepage;