export default function ContactForm({ name, email, phone, address, image, handleOnSubmit, handleOnChange, isEditing }) {
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleOnChange}
                    placeholder="Enter Name"
                    required
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Enter Email"
                    required
                />
                <br />
                <label htmlFor="phone">Phone: </label>
                <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={handleOnChange}
                    placeholder="Enter Phone"
                    required
                />
                <br />
                <label htmlFor="address">Address: </label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={handleOnChange}
                    placeholder="Enter Adress"
                    required
                />
                <br />
                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    value={image}
                    onChange={handleOnChange}
                    placeholder="Enter Image URL"
                />
                <br />
                <button>{isEditing ? "Editing" : "Submit"}</button>
            </form>
        </div>
    );
}