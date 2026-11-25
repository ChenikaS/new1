 function myFunction() {
    document.getElementById("btn");
    alert("Completed Successfully");
}

function showServices() {
    let category = document.getElementById("category").value;
    let service = document.getElementById("service");

    service.innerHTML = "<option value=''>Select Service</option>";

    if (category === "hair") {
        service.innerHTML +=
            "<option>Hair Wash</option>" +
            "<option>Hair Blow Dry</option>" +
            "<option>U/V Cut</option>" +
            "<option>Layer/Step Cut</option>" +
            "<option>Feather Cut</option>" +
            "<option>Hair Styling</option>" +
            "<option>Hair Straightening</option>" +
            "<option>Hair Curling</option>" +
            "<option>Hair Spa</option>" +
            "<option>Deep Conditioning</option>" +
            "<option>Scalp Treatment</option>" +
            "<option>Colour–Root Touch-up</option>" +
            "<option>Global Hair Colour</option>" +
            "<option>Highlights</option>" +
            "<option>Balayage/Ombre</option>" +
            "<option>Keratin</option>" +
            "<option>Hair Smoothening</option>" +
            "<option>Bridal Hairstyle</option>" +
            "<option>Party Hairstyle</option>";
    }

    else if (category === "skin") {
        service.innerHTML +=
            "<option>Basic Facial</option>" +
            "<option>Cleanup</option>" +
            "<option>Deep Cleansing</option>" +
            "<option>Fruit Facial</option>" +
            "<option>Gold Facial</option>" +
            "<option>Herbal Facial</option>" +
            "<option>De-Tan Treatment</option>" +
            "<option>Bleach</option>" +
            "<option>Face Scrub</option>" +
            "<option>Face Mask</option>" +
            "<option>Blackhead Removal</option>" +
            "<option>Acne Care</option>";
    }

    else if (category === "makeup") {
        service.innerHTML +=
            "<option>Basic Makeup</option>" +
            "<option>Party Makeup</option>" +
            "<option>Bridal Makeup</option>" +
            "<option>Engagement Makeup</option>" +
            "<option>Reception Makeup</option>" +
            "<option>HD Makeup</option>" +
            "<option>Eye Makeup</option>" +
            "<option>Makeup & Hair Combo</option>";
    }

    else if (category === "Massage and Spa") {
        service.innerHTML +=
            "<option>Head Massage</option>" +
            "<option>Neck & Shoulder</option>" +
            "<option>Full Body Massage</option>" +
            "<option>Foot Massage</option>" +
            "<option>Back Massage</option>" +
            "<option>Herbal Massage</option>" +
            "<option>Body Scrub</option>" +
            "<option>Body Polish</option>";
    }

    else if (category === "Threading and Waxing") {
        service.innerHTML +=
            "<option>Eyebrow Threading</option>" +
            "<option>Upper Lip Threading</option>" +
            "<option>Full Face Threading</option>" +
            "<option>Forehead Threading</option>" +
            "<option>Underarm Waxing</option>" +
            "<option>Half Leg Waxing</option>" +
            "<option>Full Leg Waxing</option>" +
            "<option>Full Hand Waxing</option>";
    }

    else if (category === "nails") {
        service.innerHTML +=
            "<option>Basic Manicure</option>" +
            "<option>Spa Manicure</option>" +
            "<option>Basic Pedicure</option>" +
            "<option>Spa Pedicure</option>" +
            "<option>French Manicure</option>" +
            "<option>Gel Polish</option>" +
            "<option>Nail Art</option>" +
            "<option>Nail Extensions</option>" +
            "<option>Acrylic Nails</option>" +
            "<option>Gel Nail Extensions</option>" +
            "<option>Nail Buffing</option>" +
            "<option>Nail Shaping</option>" +
            "<option>Nail Polish Removal</option>" +
            "<option>Cuticle Care</option>" +
            "<option>Nail Repair</option>" +
            "<option>Chrome Nail Art</option>" +
            "<option>Glitter Nail</option>";
    }
}