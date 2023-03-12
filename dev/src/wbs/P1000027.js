import React from 'react';


import UmlItem from './P1000027/UmlItem.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style ={
    display:'flex',
    justifyContent: 'center',
    width:'100vw',
    height: '100vh',
    overflow:'auto'
};

export default function P1000027 () {
    return (
        <div style={style}>
          <Box sx={{p: '55px'}}>
            <Typography gutterBottom variant="h2" component="div" sx={{textAlign: 'center'}}>
              構造図
            </Typography>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
              {data1().map((d)=> {
                  return (
                      <div key={d.title} style={{padding:22}}>
                        <UmlItem width={d.w}
                                 height={d.h}
                                 title={d.title}
                                 description={d.description}
                                 image={d.image}/>
                      </div>
                  );
              })}
            </div>
          </Box>

          <Box sx={{p: '55px'}}>
            <Typography gutterBottom variant="h2" component="div" sx={{textAlign: 'center'}}>
              振る舞い図
            </Typography>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
              {data2().map((d)=> {
                  return (
                      <div key={d.title} style={{padding:22}}>
                        <UmlItem width={d.w}
                                 height={d.h}
                                 title={d.title}
                                 description={d.description}
                                 image={d.image}/>
                      </div>
                  );
              })}
            </div>
          </Box>

          <Box sx={{p: '55px'}}>
            <Typography gutterBottom variant="h2" component="div" sx={{textAlign: 'center'}}>
              相互作用図
            </Typography>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
              {data3().map((d)=> {
                  return (
                      <div key={d.title} style={{padding:22}}>
                        <UmlItem width={d.w}
                                 height={d.h}
                                 title={d.title}
                                 description={d.description}
                                 image={d.image}/>
                      </div>
                  );
              })}
            </div>
          </Box>
        </div>
    );
}

function data1 () {
    return [
        {
            w:512,
            h: 488,
            title: 'ディプロイメント図 (配置図)',
            description: [
                'システムの実行アーキテクチャの図式化。',
                'ハードウェアおよびソフトウェアの実行環境のそれぞれをノードで表わし、それらを結合するミドルウェアも記述する。',
            ],
            image:{
                w: 512,
                h: 327,
                src: "https://upload.wikimedia.org/wikipedia/commons/f/f7/UML_Deployment_Diagram.svg",
            }
        },
        {
            w:512,
            h: 488,
            title: 'コンポーネント図',
            description: [
                'アプリケーションやシステムを構成するコンポーネントの図式化。',
                'それらの相互関係、相互作用、公開インターフェースも記述する。',
            ],
            image:{
                w: 512,
                h: 327,
                src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Policy_Admin_Component_Diagram.PNG",
            }
        },
        {
            w:512,
            h: 488,
            title: 'コンポジット構造図',
            description: [
                'クラス、コンポーネント、ユースケースといった分類子の内部構造の図式化。',
                '分類子とシステム内パーツの相互作用ポイントも合わせて記述する。',
            ],
            image:{
                w: 470,
                h: 144,
                src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Composite_Structure_Diagram.png",
            }
        },
        {
            w:512,
            h: 488,
            title: 'クラス図',
            description: [
                'クラス、型、その内容、その関係性といった静的モデル要素の集まりの図式化。',
            ],
            image:{
                w: 212,
                h: 113,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BankAccount1.svg/212px-BankAccount1.svg.png",
            }
        },
        {
            w:512,
            h: 488,
            title: 'オブジェクト図',
            description: [
                '特定タイミングでのオブジェクトとその関係性の図式化。',
                'クラス図またはコミュニケーション図での特別ケースを記述。',
            ],
            image:{
                w: 954,
                h: 655,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Object_diagram.png/800px-Object_diagram.png",
            }
        },
        {
            w:512,
            h: 488,
            title: 'パッケージ図',
            description: [
                'モデル要素のパッケージ分割構成を図式化。',
                'パッケージ間の依存関係も記述。',
            ],
            image:{
                w: 1429,
                h: 857,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Package_Diagram.PNG/800px-Package_Diagram.PNG",
            }
        },
        {
            w:512,
            h: 488,
            title: 'プロファイル図',
            description: [
                'プロトタイプベース向けのオブジェクトデザイン。',
            ],
            image:{
                w: 252,
                h: 254,
                src: "https://upload.wikimedia.org/wikipedia/commons/2/25/Uml_profilak1.PNG",
            }
        },
    ];
};
function data2 () {
    return [
        {
            w:512,
            h: 488,
            title: 'アクティビティ図',
            description: [
                '高水準業務プロセスを図式化。',
                'システム内のデータフロー、複合ロジックのロジックを模型化する。',
            ],
            image:{
                w: 578,
                h: 626,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Activity_conducting.svg/553px-Activity_conducting.svg.png",
            }
        },
        {
            w:512,
            h: 488,
            title: 'ステートマシン図',
            description: [
                'オブジェクトまたは相互作用を内包した状態と、状態遷移の図式化。',
                '状態図、状態チャート図、状態遷移図に言及されていた。',
            ],
            image:{
                w: 353,
                h: 470,
                src: "https://upload.wikimedia.org/wikipedia/commons/b/be/UML_state_diagram.png",
            }
        },
        {
            w:512,
            h: 488,
            title: 'ユースケース図',
            description: [
                'ユースケース、アクター、それらの相互関係を図式化。',
            ],
            image:{
                w: 513,
                h: 304,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/UML_Use_Case_diagram.svg/513px-UML_Use_Case_diagram.svg.png",
            }
        },
    ];
};
function data3 () {
    return [
        {
            w:512,
            h: 488,
            title: 'シーケンス図',
            description: [
                '分類子間のメッセージ交換における時系列のエフェクトを描写するシーケンシャル・ロジックのモデル図',
            ],
            image:{
                w: 469,
                h: 465,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/CheckEmail.svg/469px-CheckEmail.svg.png",
            }
        },
        {
            w:512,
            h: 488,
            title: 'インタラクション概要図 (相互作用概要図)',
            description: [
                'システムや業務プロセス内の制御フローの概要の図式化。',
                'その各ノード/アクティビティを、他のインタラクション概要図表記にしての入れ子構図にできる。アクティビティ図の派生とされる。',
            ],
            image:{
                w: 400,
                h: 500,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Uml-Iod-Diagram1.svg/400px-Uml-Iod-Diagram1.svg.png",
            }
        },
        {
            w:512,
            h: 488,
            title: 'タイミング図',
            description: [
                '分類子インスタンスや役割子の状態またはコンディションの変遷の図式化。',
                'レスポンスや外部イベントによるオブジェクトの状態変化の描写。',
            ],
            image:{
                w: 512,
                h: 327,
                src: "",
            }
        },
        {
            w:512,
            h: 488,
            title: 'コミュニケーション図',
            description: [
                'クラスのインスタンス、相互関係、メッセージフローを図式化。',
                'メッセージを送受するオブジェクトの構造的機構に注目する。以前はコラボレーション図だった。',
            ],
            image:{
                w: 415,
                h: 220,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/UML_Communication_diagram.svg/415px-UML_Communication_diagram.svg.png",
            }
        },
    ];
};
