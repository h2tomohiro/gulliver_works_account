import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignInParams, useSignInPresenter } from "./useSignInPresenter";

const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignInParams>();
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
            <input name="account.email" ref={register} />
          </div>
          <div className={styles.passwordInputWrapper}>
            <p>パスワード</p>
            <input name="account.password" ref={register} />
          </div>
          <div className={styles.loginButtonWrapper}>
            <button>ログイン</button>
          </div>
        </form>
        <div className={styles.linkToForgetPasswordWrapper}>
          <Link to="/">パスワードを忘れた方はこちら</Link>
        </div>
        <div className={styles.signupWrapper}>
          <button>新規登録はこちら</button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
