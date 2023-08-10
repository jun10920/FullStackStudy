export const setPersonalInfo = async () => {
    // const response = await fetch("/getUserList");
    axios.get("/api/getUserList", null).then((res) => {
        console.log(res.data);
    });
};
