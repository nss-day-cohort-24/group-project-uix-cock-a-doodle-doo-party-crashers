"use strict";

function meetupForm(favdata, meetupID) {
    return new Promise(function (resolve, reject) {
        let meetupItem = {
            name: favdata ? favdata.name : "",
            date: favdata ? favdata.date : "",
            time: favdata ? favdata.time : "",
            venue: favdata ? favdata.venue : "",
            address: favdata ? favdata.address : "",
            url: favdata ? favdata.url : "",
            formTitle: favdata ? `Edit "${favdata.title}"` : "Add a new song",
            btnText: favdata ? "save changes" : "save song",
            btnId: favdata ? "save_edit_btn" : "save_new_btn"
        },
            form =
                `<h3>${meetupItem.formTitle}</h3>
      <input type="text" id="form--title" placeholder="title" value="${meetupItem.name}"></input>
      <input type="text" id="form--artist" placeholder="artist" value="${meetupItem.date}"></input>
      <input type="text" id="form--album" placeholder="album" value="${meetupItem.time}"></input>
      <input type="text" id="form--year" placeholder="year" value="${meetupItem.venue}"></input>
      <input type="text" id="form--year" placeholder="year" value="${meetupItem.address}"></input>
      <input type="text" id="form--year" placeholder="year" value="${meetupItem.url}"></input>
      <button id="${meetupID}" class=${meetupItem.btnId}>${meetupItem.btnText}</button>`;
        resolve(form);
    });
}

module.exports = {meetupForm};