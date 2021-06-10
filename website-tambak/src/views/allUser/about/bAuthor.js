const AboutUs = () => {
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="my-4 col-auto">
          <h1>The Authors of This Application</h1>
        </div>
      </div>
      <div class="row ">
        <div class="col col-3">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://via.placeholder.com/240x320"
            alt="..."
          />
        </div>
        <div class="col col-lg-6 ">
          <h3 class="font-weight-light">Frederick Solaiman</h3>
          <p class="text-justify">
            Frederick Solaiman, or usually called Eric is currently studying
            Informatics in Parahyangan Catholic University. His NPM is
            2016730040, which means he's a 2016 graders.
          </p>
          <p class="text-justify">
            He created this monitoring system to improve local farmers, or any
            company that runs a fishpond. Limits or parameters used for
            monitoring can be customized to follow user needs.
          </p>
          <p class="text-justify">
            Reach out with the following address:
            <br />
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/fredericksolaiman98/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:fritzfrederick51@gmail.com">E-mail</a>
              </li>
              <li>
                <a href="https://wa.me/6282217236411">Whatsapp</a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
