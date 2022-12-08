import React, { useState } from 'react';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const saveContact = () => {
        ContactsCollection.insert({name, email, imageUrl});
        setName("");
        setEmail("");
        setImageUrl("");
    }
    
    return (
        <form>
            <div>
                <label htmlFor='name'>
                    Name
                </label>
                <input
                value={name} 
                type="text" 
                id="name"
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor='email'>
                    Email
                </label>
                <input
                value={email} 
                type="text" 
                id="email"
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor='imageUrl'>
                    Image Url
                </label>
                <input 
                value={imageUrl}
                type="text" 
                id="imageUrl"
                onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <button type="button" onClick={saveContact}>Save Contact</button>
        </form>
    );
}