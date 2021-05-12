let Struk = "";
window.onload = function() {
    const useNodeJS = false;   // if you are not using a node server, set this value to false
    const defaultLiffId = "1655539034-D4Bm4NqM";   // change the default LIFF value if you are not using a node server
 
    // DO NOT CHANGE THIS
    let myLiffId = "";
 
    // if node is used, fetch the environment variable and pass it to the LIFF method
    // otherwise, pass defaultLiffId
    if (useNodeJS) {
        fetch('/send-id')
            .then(function(reqResponse) {
                return reqResponse.json();
            })
            .then(function(jsonResponse) {
                myLiffId = jsonResponse.id;
                initializeLiffOrDie(myLiffId);
            })
            .catch(function(error) {
                document.getElementById("liffAppContent").classList.add('hidden');
                document.getElementById("nodeLiffIdErrorMessage").classList.remove('hidden');
            });
    } else {
        myLiffId = defaultLiffId;
        initializeLiffOrDie(myLiffId);
    }
};
 
/**
* Check if myLiffId is null. If null do not initiate liff.
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {
        document.getElementById("liffAppContent").classList.add('hidden');
        document.getElementById("liffIdErrorMessage").classList.remove('hidden');
    } else {
        initializeLiff(myLiffId);
    }
}
 
/**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            document.getElementById("liffAppContent").classList.add('hidden');
            document.getElementById("liffInitErrorMessage").classList.remove('hidden');
        });
}
 
/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
    displayLiffData();
    displayIsInClientInfo();
    registerButtonHandlers();
 
    // check if the user is logged in/out, and disable inappropriate button
    if (liff.isLoggedIn()) {
        document.getElementById("tampilKaloLogin").classList.remove('hidden');
        document.getElementById("tampilTanpaLogin").classList.add('hidden');
        document.getElementById('liffLoginButton').disabled = true;
        addProfile();
    } else {
        document.getElementById('liffLogoutButton').disabled = true;
    }
}
 
/**
* Display data generated by invoking LIFF methods
*/
function displayLiffData() {
    document.getElementById('isInClient').textContent = liff.isInClient();
    document.getElementById('isLoggedIn').textContent = liff.isLoggedIn();
}
 
/**
* Toggle the login/logout buttons based on the isInClient status, and display a message accordingly
*/
function displayIsInClientInfo() {
    if (liff.isInClient()) {
        document.getElementById('liffLoginButton').classList.toggle('hidden');
        document.getElementById('liffLogoutButton').classList.toggle('hidden');
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in the in-app browser of LINE.';
    } else {
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in an external browser.';
    }
}
// function profile()

// {

//     liff.getProfile()

//         .then(profile => {

//             let user = document.getElementById('getProfileAcc');
//             user.innerHTML = profile.displayName;

//         })

//         .catch((err) => {

//             console.log('error', err);

//         });

// }

function addProfile(){
    //mendapatkan profil pengguna
    const lineProfile = document.getElementById('getProfileAcc');
    liff.getProfile()
    .then(profile => {
      nama = profile.displayName;
      lineProfile.innerHTML = `${nama}`;
      })
    .catch((err) => {
      console.log('error', err);
    });
};

    
function registerButtonHandlers() {

    document.getElementById('openWindowButton').addEventListener('click', function() {
        liff.openWindow({
            url: 'https://trustycafe.herokuapp.com/', // Isi dengan Endpoint URL aplikasi web Anda
            external: true
        });
    });

    document.getElementById('closeWindowButton').addEventListener('click', function() {
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.closeWindow();
        }
    });

    document.getElementById('liffLoginButton').addEventListener('click', function() {
        if (!liff.isLoggedIn()) {
            liff.login();
            // profile();
                // document.getElementById('getProfileAcc').textContent = liff.getProfile(); {
                //     liff.getProfile(profile)
                //     .then(profile => {
                //         const name = profile.displayName
                //     })
                //     .catch((err) => {
                //         console.log('error', err);
                //     })
                // }
        }
    });
 
    document.getElementById('liffLogoutButton').addEventListener('click', function() {
        if (liff.isLoggedIn()) {
            liff.logout();
            window.location.reload();
        }
    });
    
    document.getElementById('sendMessageButton').addEventListener('click', function() {
        Struk = buttonJajanListener();
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.sendMessages([{
                'type': 'text',
                'text': `${Struk} Terima Kasih` 
            }]).then(function() {
                window.alert('Terima Kasih Sudah Belanja!');
            }).catch(function(error) {
                window.alert('Error sending message: ' + error);
            });
        }
    });

}

function buttonJajanListener() {

    let namaUser = document.getElementById("getProfileAcc");



    let makanan1 = document.getElementById("item1");
    
    let makanan2 = document.getElementById("item2");
    
    let minuman3 = document.getElementById("item3");
    
    let minuman4 = document.getElementById("item4");
    
    let sub_harga1 = document.getElementById("harga");
    
    let sub_harga2 = document.getElementById("harga2");
    
    let sub_harga3 = document.getElementById("harga3");
    
    let sub_harga4 = document.getElementById("harga4");
    
    let total_harga = document.getElementById("total");
    
    
    let strukBelanja = "Hai, " + namaUser.innerHTML + "\n\n" +
    
        "Terimakasih telah memesan makanan dan minuman di Trusty Cafe! \n" +
    
        "Berikut adalah rincian pesanan anda: \n\n" +
    
        makanan1.innerHTML + " item Seblak : Rp. " + sub_harga1.innerHTML + "\n" +
    
        makanan2.innerHTML + " item Makaroni Basah : Rp. " + sub_harga2.innerHTML + "\n" +
    
        minuman3.innerHTML + " item Es Boba : Rp. " + sub_harga3.innerHTML + "\n" +
    
        minuman4.innerHTML + " item Cappucino Cincau : Rp. " + sub_harga4.innerHTML + "\n\n" +
    
        "Maka,\n" +
    
        "Total harga Rp. " + total_harga.innerHTML + "\n\n" +
    
        "Silahkan lakukan proses pembayaran di kasir ya :D";
   
    return strukBelanja;
//     document.getElementById('button_pesan').addEventListener('click', function () {

//         if (!liff.isInClient) {

//             sendAlertIfNotInClient();

//         } else {

//             liff.sendMessages([{

//                 'type': 'text',

//                 'text': strukBelanja

//             }]).then(function () {

//                 window.alert('Struk belanja berhasil dikirim!');

//             }).catch(function (error) {

//                 window.alert('Error sending message: ' + error);

//             });

//         }

//     });

}

function sendAlertIfNotInClient() {
    alert('This button is unavailable as LIFF is currently being opened in an external browser.');
}
 
/**
* Toggle specified element
* @param {string} elementId The ID of the selected element
*/
function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = 'none';
    } else {
        elem.style.display = 'block';
    }
}

