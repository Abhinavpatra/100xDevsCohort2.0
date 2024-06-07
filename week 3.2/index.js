  getAnimatedData = async ()=> {
    try {
        const response = await fetch("https://fakerapi.it/api/v1/persons");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const finalData = await response.json();
        console.log(finalData);

    } catch (error) {
        console.error("Error wah wah:", error);
    }
}
getAnimatedData();