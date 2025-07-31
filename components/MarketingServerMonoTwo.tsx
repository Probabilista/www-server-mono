import styles from '@components/MarketingServerMono.module.scss';

import * as React from 'react';

import ActionItem from '@system/documents/ActionItem';
import IntDev from '@system/svg/IntDev';

import { H3, P, Title, SubText } from '@system/typography';

export default function MarketingServerMonoTwo(props) {
  const releaseVersion = '0.1.0';

  return (
    <>
      <div className={styles.root}>
        <div className={styles.row}>
          <div className={styles.left}>
            <P>QUATRE SABOTS Capital</P>
            <P style={{ marginTop: `1rem`, whiteSpace: 'pre-wrap', lineHeight: 1, fontSize: 17 }}>
              {`

  ██████╗ ███████╗ ██████╗
██╔═══██╗██╔════╝██╔════╝
██║   ██║███████╗██║
██║   ██║╚════██║██║
╚██████╔╝███████║╚██████╗
  ╚█════╝ ╚══════╝ ╚═════╝
`}
            </P>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.content}>
            <Title></Title>
            <ActionItem style={{ marginTop: `1rem` }} icon={`⭢`} href="mailto:adrientd@icloud.com" target="_blank">
              L'âge du jackpot
            </ActionItem>
            <ActionItem icon={`⭢`} href="https://quatresabots.substack.com" target="_blank">
              Vendre des options : quelques bêtises entendues
            </ActionItem>
          </div>
        </div>

        <hr className={styles.divider} />

        <hr className={styles.divider} style={{ marginTop: 0 }} />
      </div>
    </>
  );
}
