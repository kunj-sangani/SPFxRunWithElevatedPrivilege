import * as React from 'react';
import styles from './ElevatedAccessWebPart.module.scss';
import { IElevatedAccessWebPartProps } from './IElevatedAccessWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { HttpClient, HttpClientResponse } from "@microsoft/sp-http";

export default class ElevatedAccessWebPart extends React.Component<IElevatedAccessWebPartProps, {}> {

  public componentDidMount() {
    this.props.context.httpClient.post("https://prod-25.centralindia.logic.azure.com:443/workflows/bd6453086e0c4bd3a43307f700c00397/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=qlKcyRu3ob6ZwAO8aVuv1o5nFZjXW4qCUKWzWvCkOEo", HttpClient.configurations.v1, {}).then((val: HttpClientResponse) => {
      val.json().then(token => {
        console.log(token.access_token);
        this.props.context.httpClient.fetch("https://testinglala.sharepoint.com/_api/web/lists/getbytitle('Employee')/items?$select=Title", HttpClient.configurations.v1, {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
            Accept: "application/json; odata=verbose"
          }
        }).then((items: HttpClientResponse) => {
          items.json().then((itemsvalue) => {
            console.log(itemsvalue.d.results);
          });
        }).catch((err) => {

        });
      });
    }).catch((error) => {

    });
  }

  public render(): React.ReactElement<IElevatedAccessWebPartProps> {
    return (
      <div className={styles.elevatedAccessWebPart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
