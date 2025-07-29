import styles from '@components/MarketingServerMono.module.scss';

import * as React from 'react';

import ActionItem from '@system/documents/ActionItem';
import IntDev from '@system/svg/IntDev';

import { H3, P, Title, SubText } from '@system/typography';

export default function MarketingServerMono(props) {
  const releaseVersion = '0.1.0';

  return (
    <>
      <div className={styles.root}>
        <div className={styles.row}>
          <div className={styles.left}>
            <P>Quatre Sabots Capital</P>
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

        <hr className={styles.divider} />

        <div className={styles.row}>
          <div className={styles.content}>
            <P>
              QSC est une société de trading pour compte propre sur instruments dérivés listés. QSC gère des stratégies axées sur la volatilité qui exploitent les dislocations sur
              les prix et fournissent de la liquidité aux utilisateurs finaux.
              <br />
              <br />
              QSC combine plusieurs stratégies pour obtenir des rendements décorrélés et positifs dans toutes les conditions de marché.
              <br />
              <br />
              L'activité de trading de QSC ne consiste pas à avoir une opinion sur la direction des marchés, mais à mesurer, normaliser et comparer les paramètres qui constituent
              un prix pour capturer les dislocations.
              <br />
              <br />
              Comme disait Matisse : "Je ne peins pas les choses, je peins la différence entre les choses."
            </P>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.content}>
            <Title></Title>
            <ActionItem style={{ marginTop: `1rem` }} icon={`⊹`} href="mailto:adrientd@icloud.com" target="_blank">
              Contact
            </ActionItem>
            <ActionItem icon={`⭢`} href="https://quatresabots.substack.com" target="_blank">
              Lire articles & recherche
            </ActionItem>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.content}>
            <P>Quatre Sabots Capital - 59 Rue de Ponthieu - 75008 Paris</P>
          </div>
        </div>

        <hr className={styles.divider} />

        <hr className={styles.divider} style={{ marginTop: 0 }} />
      </div>
    </>
  );
}
