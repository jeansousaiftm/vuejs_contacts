import { createLocal, createSession, createStorage } from 'the-storages';

const mirror = createLocal();
const storage = mirror._prx;

class ContactDataService {
	
	init() {
		
		if (storage.getItem("contacts") === null) {
			storage.setItem("contacts", []);
		}
		if (storage.getItem("contact_id") === null) {
			storage.setItem("contact_id", "0");
		}
		
	}
	
	nextId() {
		return parseInt(storage.contact_id);
	}
	
	firstOrDefault(id) {
		if (id < storage.contacts.length) {
			return storage.contacts[id];
		} else {
			return { "id": id, "name": "", "email": "", "contact": "", "image": "" };
		}		
	}
	
	save(contact) {
	
		var c = storage.contacts;
		
		if (contact.id < storage.contacts.length) {
			c[contact.id] = contact;
		} else {
			c.push(contact);
			storage.contact_id = (parseInt(storage.contact_id) + 1).toString();
		}	
		
		storage.contacts = c;
		
	}
	
	destroy(id) {

		if (id < storage.contacts.length) {
		
			var c = storage.contacts;
			c[id] = null;
			storage.contacts = c;
		
		}		
		
	}
	
	emailExists(contact) {
		
		var retorno = false;
		
		storage.contacts.forEach(function(c) {
			if (c !== null) {
				if (c.id != contact.id && c.email == contact.email) {
					retorno = true;
				}
			}
		});
		
		return retorno;
		
	}
	
}
	
export default new ContactDataService();