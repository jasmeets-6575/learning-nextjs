const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {};
  const handleChange = (e) => {};

  return (
    <div className={styles.container}>
      <h1>Contact US</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* name */}
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        {/* email */}
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Enter Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        {/* phone */}
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Enter Your Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>

        {/* desc */}
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>
            Elaborate your concern
          </label>
          <textarea
            className="form-control"
            value={desc}
            placeholder="Leave a your concern here"
            name="desc"
            id="desc"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
