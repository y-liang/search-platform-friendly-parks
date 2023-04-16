

// cookies with the same name, domain, and path will overwrite

const useCookie = () => {



    return {

        // cookie name, cookie value, hour to expire
        assert(name, value, hour) {
            // one cookie, cookie object to start, gradually adding key value pairs
            let objCookie = { [name]: value, path: '/' }; //

            // expires, utc string, expires=Sun, 03 Apr 2022 02:38:55 GMT;
            let date = new Date();
            date.setTime(date.getTime() + (hour * 60 * 60 * 1000));
            objCookie.expires = date.toGMTString();

            // same site, none
            objCookie.sameSite = 'None';

            // secure, boolean
            objCookie.secure = true;

            // array cookie object then join
            let array = [];
            for (let key in objCookie) {
                array.push(key + '=' + objCookie[key]);
            }

            // let string = array.join('; ') + '; SameSite=Lax; Secure';
            // console.log('string', string);


            document.cookie = array.join('; ');

            // document.cookie = `hello=12345; expires=Sun, 03 Apr 2022 05:00:37 GMT; domain='.wagtrail.dev.yliang.net'; path=/; Secure`;
            let x = this.display();

        },

        // delete specific cookie, overwrite with same name, empty value, and negative expire time
        remove(name) {
            this.assert(name, '', -1); // overwrite each cookie
        },

        // view cookie value via cookie name
        view(name) {
            // multiple cookies, find the name, cookie objCookie with name and value pairs
            let objCookies = {};
            document.cookie.split(';').forEach(elem => {
                let [key, value] = elem.split('=');
                objCookies[key.trim()] = value;
            });

            return objCookies[name]; // value of the cookie
        },


        // display all cookies
        display() {
            // multiple cookies, cookie object with name and value pairs
            let objCookies = {};
            document.cookie.split(';').forEach(elem => {
                let [key, value] = elem.split('=');
                objCookies[key.trim()] = value;
            });

            return objCookies;
        },

        // delete all cookie, overwrite with same name, empty value
        clear() {
            // multiple cookies, cookie object with name and value pairs
            document.cookie.split(';').forEach(elem => {
                let [key, value] = elem.split('=');
                this.assert(key, '', -1); // overwrite each cookie
            });
        },


    };

};


export default useCookie;