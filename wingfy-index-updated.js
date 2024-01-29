{
    let wrapperNode = document.createElement('section');
    wrapperNode.setAttribute('class', 'wrapper-class');
    wrapperNode.setAttribute('id', 'wrapperId');

    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('class', 'parent-div');

    let leftSide = document.createElement('div');
    leftSide.setAttribute('class', 'left-side');

    let headingFirst = document.createElement('h3');
    headingFirst.innerHTML = 'GET $10 OFF WHEN YOU ARE SIGN UP FOR';

    let headingSecond = document.createElement('h3');
    headingSecond.innerHTML = 'SAVING,NEWS,UPDATE AND MORE';

    let form = document.createElement("form");
    form.setAttribute("name", "formvalidation");

    let userName = document.createElement("input");
    userName.setAttribute("type", "text");
    userName.setAttribute("placeholder", "your name");
    userName.setAttribute("id", "userName");
    userName.setAttribute("name", "username");
    userName.setAttribute("value", "");

    let usernameError = document.createElement("span");
    usernameError.setAttribute("class", "input-error");
    usernameError.innerHTML = 'Username is can not blank';

    let emailAddress = document.createElement("input");
    emailAddress.setAttribute("type", "text");
    emailAddress.setAttribute("placeholder", "email address");
    emailAddress.setAttribute("id", "emailId");
    emailAddress.setAttribute("name", "email");
    emailAddress.setAttribute("value", "");

    let emailError = document.createElement("span");
    emailError.setAttribute("class", "input-error");
    emailError.innerHTML = 'Email Id is can not blank';

    let checkboxParent = document.createElement('div');
    checkboxParent.setAttribute('class', 'checkbox-parent');

    let checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("id", "policy");
    checkboxInput.setAttribute("name", "policy");

    let checkboxInputError = document.createElement("span");
    checkboxInputError.setAttribute("class", "input-error");
    checkboxInputError.innerHTML = 'You didn\'t choose checkboxe!';

    let checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", "policy");
    checkboxLabel.innerHTML = "check this box to receive monthly newsletter";

    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("class", "signup-button");
    submitBtn.setAttribute("id", "signupButton");
    submitBtn.innerHTML = "SIGN UP";

    let privacyPolicy = document.createElement("a");
    privacyPolicy.setAttribute("href", "#");
    privacyPolicy.innerHTML = "PRIVACY POLICY";

    let rightSide = document.createElement('div');
    rightSide.setAttribute('class', 'right-side');

    let rightImg = document.createElement("img");
    rightImg.setAttribute('src', 'https://picsum.photos/seed/picsum/291/291');

    let closeButton = document.createElement("span");
    closeButton.setAttribute('class', 'material-symbols-outlined close-button');
    closeButton.setAttribute('id', 'closeButton');
    closeButton.innerHTML = "close";

    wrapperNode.appendChild(parentDiv);

    parentDiv.appendChild(leftSide);
    leftSide.appendChild(headingFirst);
    leftSide.appendChild(headingSecond);
    leftSide.appendChild(form);

    form.appendChild(userName);
    form.appendChild(usernameError);
    form.appendChild(emailAddress);
    form.appendChild(emailError);
    form.appendChild(checkboxParent);
    checkboxParent.appendChild(checkboxInput);
    checkboxParent.appendChild(checkboxLabel);
    form.appendChild(checkboxInputError);
    form.appendChild(submitBtn);
    form.appendChild(privacyPolicy);

    parentDiv.appendChild(rightSide);
    rightSide.appendChild(rightImg);

    parentDiv.appendChild(closeButton);

    document.getElementsByTagName("body")[0].appendChild(wrapperNode);

    // ----------------------------Adding CSS-------------------------------

    const addGoogleFont = document.createElement('link');
    addGoogleFont.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto');
    addGoogleFont.setAttribute('rel', 'stylesheet');
    document.head.appendChild(addGoogleFont);

    const addGoogleIcon = document.createElement('link');
    addGoogleIcon.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
    addGoogleIcon.setAttribute('rel', 'stylesheet');
    document.head.appendChild(addGoogleIcon);

    const adCSS = `
    <style>
    .wrapper-class {
        width: auto;
        height: auto;
        transition: opacity 1s ease;
        font-family: 'Roboto', serif;
    }

    .wrapper-class::before {
        content: '';
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }

    .wrapper-class .parent-div {
        width: 700px;
        padding: 25px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #ffc500;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 2;
        gap: 20px;
    }

    .wrapper-class .left-side {
        flex-basis: 100%;
    }

    .wrapper-class h3 {
        margin: 0;
        padding: 0;
        font-weight: bold;
        text-align: center;
        font-size: 18px;
        font-family: 'Roboto', serif;
        color: #000;
    }

    .wrapper-class  h3:nth-child(2) {
        margin-bottom: 10px;
        font-weight: normal;
    }

    .wrapper-class input[type=text],
    .wrapper-class input[type=email] {
        width: 100%;
        height: auto;
        border: none;
        margin: 10px 0;
        padding: 20px;
        box-sizing: border-box;
        color: #b5aaaa;
        background: #fff;
    }

    .wrapper-class input[type=checkbox]{
        margin: 0;
    }

    .wrapper-class .input-error {
        color: red;
        font-size: 12px;
        display: none;
    }

    .wrapper-class label {
        margin: 0;
    }

    .wrapper-class .checkbox-parent {
        display: flex;
        font-size: 13px;
        align-items: center;
        gap: 5px;
        margin: 8px 0;
    }

    .wrapper-class .signup-button {
        width: 100%;
        background: black;
        color: #fff;
        padding: 20px;
        border: none;
        margin-top: 15px;
        cursor: pointer;
        line-height: normal;
    }

    .wrapper-class img {
        width: 100%;
    }

    .wrapper-class a {
        font-size: 10px;
        display: block;
        text-align: center;
        margin-top: 6px;
        color: #000;
        text-decoration: underline;
    }

    .wrapper-class .close-button {
        position: absolute;
        right: 10px;
        top: 10px;
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
    }

    /* for mobile responsive */

    @media only screen and (max-width: 600px) {
        .wrapper-class .parent-div {
            max-width: 300px;
            padding: 50px 25px;
            display: block;
        }

        .wrapper-class h3 {
            font-size: 14px;
        }

        .wrapper-class input[type=text], .wrapper-class input[type=email] {
            padding: 12px;
        }

        .wrapper-class .right-side {
            display: none;
        }

        .wrapper-class .signup-button {
            padding: 12px;
        }
    }
    </style>
    `;

    document.head.insertAdjacentHTML('beforeend', adCSS);

    // ------------------------------Form validations--and Cookies----------------------------------------

    function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    userName = getCookie("username");
    emailAddress = getCookie("emailaddress");

    if (userName != '' && emailAddress != '') {
        console.log(userName, emailAddress);
        wrapperNode.style.display = 'none';
    }

    document.getElementById("signupButton").addEventListener("click", function (event) {
        event.preventDefault();

        userName = document.formvalidation.userName;
        emailAddress = document.formvalidation.email;

        if (userName.value == "" || userName.value == null) {
            userName.style.border = "2px solid #f00";
            userName.nextElementSibling.style.display = "block";
            return false
        } else {
            userName.nextElementSibling.style.display = "none";
            userName.style.border = "2px solid transparent";
            setCookie('username', userName.value, 2);
        }
        if (!emailAddress.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || emailAddress.value == "" || emailAddress.value == null) {
            emailAddress.nextElementSibling.style.display = "block";
            emailAddress.style.border = "2px solid #f00";
            return false
        } else {
            emailAddress.nextElementSibling.style.display = "none";
            emailAddress.style.border = "2px solid transparent";
            setCookie('emailaddress', emailAddress.value, 2);
        }
        if (checkboxInput.checked == false) {
            checkboxParent.nextElementSibling.style.display = "block";
            return false
        } else {
            checkboxParent.nextElementSibling.style.display = "none";
        }

        console.log('successfully create cookies using signup button - ', userName, emailAddress);

        wrapperNode.style.display = 'none';
    });

    document.getElementById("closeButton").addEventListener("click", function () {
        setCookie('username', userName.value, 2);
        setCookie('emailaddress', emailAddress.value, 2);

        // console.log('successfully create cookies using close icon- ', document.cookie);
        console.log('successfully create cookies using close icon- ', userName, emailAddress);

        wrapperNode.style.display = 'none';
    });

    const mediaQuery = window.matchMedia('(max-width: 600px)')

    if (mediaQuery.matches) {
        wrapperNode.style.display = 'none';

        setTimeout(() => {
            wrapperNode.style.display = 'block';
        }, 5000);
    }
}