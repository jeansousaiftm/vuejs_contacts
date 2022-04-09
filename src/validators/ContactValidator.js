import ContactDataService from "../services/ContactDataService.js";

class ContactValidator {
	
	validate(contact) {
		
		var errors = [];
		
		if (contact.name.length < 5) {
			errors.push("Name must have at least 5 digits");
		}

		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(contact.email)) {
			errors.push("Invalid E-mail");
		}
		
		if (ContactDataService.emailExists(contact)) {
			errors.push("E-mail already exists in database");
		}

		if (contact.contact.length != 9) {
			errors.push("Contact must have exactly 9 digits");
		}
		
		if (contact.image == "" || contact.image === null) {
			errors.push("Image is required");
		}
		
		return errors;
	}
	
}
	
export default new ContactValidator();