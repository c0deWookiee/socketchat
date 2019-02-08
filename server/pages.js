import Server from "./index.js";
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

Server.get("*", (req, res) => {
    const innerContent = renderToString(<App pathname={req.url}/>);

    const html = renderToStaticMarkup(<Html innerContent={innerContent} />);

    res.send(`<!DOCTYPE html>${html}`);
});



