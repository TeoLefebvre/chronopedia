import "./home.css"
import "./style.css"

export default function Home() {
  return <>
      <div className="bg"></div>
      <div className="topbar">
          <a><h1 id="title">Chronopédia</h1></a>
      </div>
      <div className="middle">
          <div className="tab_bouton">
              <p>Qui êtes-vous ?</p>
              <div className="ensemble_boutons">
                  <a href="/connexion" className="lien_bouton">
                      <button type="button" className="boutons">
                          <i>Je suis un professeur</i>
                          <div className="arrow">
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                      </button>
                  </a>
                  <a href="/" className="lien_bouton">
                      <button className="boutons">
                          <i>Je suis un élève</i>
                          <div className="arrow">
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                      </button>
                  </a>
              </div>
              
          </div>
      </div>
  </>
}