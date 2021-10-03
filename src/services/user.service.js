
class UserService {

    getUser = (userName, jwt) => {

        return fetch(`https://lobby.dev.leader.codes/api/${userName}/getUserByUserName`,
            {
                method: 'GET', headers: { 'authorization': jwt }
            })
            .then((res) => {
                // if (res.status === 401) {
                //     window.location.assign(`https://models.dev.leader.codes/login`);
                // }
                return res.json();
            })
            .then((result) => {
                console.log("res", result)
                return result;

            }, (err) => {
                return err;
            })
    }

}
export default new UserService();