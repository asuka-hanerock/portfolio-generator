import React, { useState } from "react";

const HelpSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="help-section">
      <div className="help-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>
          <span className="help-icon">💡</span>
          使い方の説明
        </h3>
        <button className="toggle-button">
          {isExpanded ? "閉じる" : "開く"}
        </button>
      </div>

      {isExpanded && (
        <div className="help-content">
          <div className="help-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>基本情報を入力</h4>
              <p>
                名前、職種、自己紹介文、ロゴ画像（任意）を入力します。ロゴ画像はファビコンとしても使用されます。
              </p>
            </div>
          </div>

          <div className="help-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>連絡先情報を追加</h4>
              <p>
                メールアドレスやSNSのリンクを入力します。入力された情報のみがポートフォリオに表示されます。
              </p>
            </div>
          </div>

          <div className="help-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>スキルを選択</h4>
              <p>
                あなたが持つスキルをリストから選択するか、カスタムスキルを追加できます。
              </p>
            </div>
          </div>

          <div className="help-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>資格・認定を追加</h4>
              <p>
                取得した資格や認定資格があれば追加します。「資格を追加」ボタンで複数の資格を登録できます。
              </p>
            </div>
          </div>

          <div className="help-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>プロジェクト情報を入力</h4>
              <p>
                あなたが手がけたプロジェクトの詳細を入力します。「プロジェクトを追加」ボタンで複数のプロジェクトを登録できます。
              </p>
            </div>
          </div>

          <div className="help-step">
            <div className="step-number">6</div>
            <div className="step-content">
              <h4>テーマをカスタマイズ（任意）</h4>
              <p>
                「テーマをカスタマイズ」ボタンをクリックして、ポートフォリオの色を自分好みに変更できます。
              </p>
            </div>
          </div>

          <div className="help-step">
            <div className="step-number">7</div>
            <div className="step-content">
              <h4>HTMLを生成</h4>
              <p>
                「HTMLを生成」ボタンをクリックして、入力した情報からポートフォリオサイトのHTMLコードを生成します。
              </p>
            </div>
          </div>

          <div className="help-step">
            <div className="step-number">8</div>
            <div className="step-content">
              <h4>結果の確認とダウンロード</h4>
              <p>
                生成されたHTMLコードを「HTMLコード」タブで確認し、コピーまたはダウンロードできます。「プレビュー」タブでは実際の表示を確認できます。
              </p>
            </div>
          </div>

          <div className="help-tip">
            <strong>ヒント:</strong>{" "}
            生成されたHTMLファイルは、そのままブラウザで開いて確認したり、ウェブサーバーにアップロードして公開したりできます。
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpSection;
