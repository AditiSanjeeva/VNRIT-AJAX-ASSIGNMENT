fetch('https://www.beyondklasses.com:8443/api/getnooflikesforfile')
    .then(data => data.json())
    .then(completedata => {
        let data1 = "";
        completedata.forEach(values => {
            data1 += `
            <div class="card">
                <a href="${values.kid_profile_path}" target="_blank">
                    <img src="${values.filename}" alt="Art" class="images">
                </a>
                <p class="likes">${values.likes} likes</p>
                <p class="kidName">${values.kidName}</p>
            </div>`;
        });
        document.getElementById("cards").innerHTML = data1;
    })
    .catch(err => {
        console.log(err);
    });



