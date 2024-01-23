import "./connection.css"
import "./style.css"

export default function Connection() {

  return <>
    <div className="bg"></div>
    <div className="topbar">
      <a>
        <h1 id="title">Chronopédia</h1>
      </a>
    </div>
    <div className="middle">
      <div id="tab_connexion">
        <div id="form_connexion">
          <form action="/timelines" method="get" className="connexion">
            <div>
              <label  htmlFor="username">Nom d'utilisateur</label>
              <input className="input_text" type="text" name="username" id="username"
                placeholder="Nom d'utilisateur" spellCheck="false" required />
            </div>
            <div>
              <button id="submit_button" type="submit">Se Connecter</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </>
}