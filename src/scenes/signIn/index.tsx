import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useHistory } from "react-router-dom";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignInParams, useSignInPresenter } from "./useSignInPresenter";

const SignInPage = () => {
  const { register, handleSubmit, errors } = useForm<SignInParams>();
  const { signIn } = useSignInPresenter();
  const { account } = useCurrentAccount();
  const history = useHistory();

  useEffect(() => {
    if (account) history.push("/");
  }, [account]);

  const onSubmit = (data: SignInParams) => {
    signIn(data);
  };

  return (
    <div className={styles.page}>
      <div className={styles.loginContainer}>
        <h1>求職者ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.emailInputWrapper}>
            <p>メールアドレス</p>
            <input
              className={styles.input}
              type="email"
              name="account.email"
              placeholder="coadmap@mail.com"
              ref={
                register({
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'メールアドレスの形式が正しくありません。',
                  },
                })
              }
              />
            <ErrorMessage errors={errors} name="email" />
          </div>
          <div className={styles.passwordInputWrapper}>
            <p>パスワード</p>
            <input
              className={styles.input}
              type='password'
              name="account.password"
              placeholder="パスワードを入力"
              ref={
                register({
                  required: true,
                  minLength: {
                    value: 6,
                    message: "パスワードは6文字以上で入力してください。"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/,
                    message: 'パスワードは半角英数記号のみ設定できます。',
                  },
                })
              }
              />
            <ErrorMessage errors={errors} name="password" />
          </div>
          <div className={styles.loginButtonWrapper}>
            <button className={styles.button}>ログイン</button>
          </div>
        </form>
        <div className={styles.forgetPasswordWrapper}>
        { /* TODO: リンク設定 */}
          <a href="">パスワードを忘れた方はこちら</a>
        </div>
        <div className={styles.signupWrapper}>
          <button className={styles.button}>新規登録はこちら</button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
