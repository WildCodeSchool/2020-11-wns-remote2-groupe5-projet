import { User } from '../components/common/SignIn/SignInForm01';

const conditionsSignIn01 = (
  users: User[],
  user: User,
  callback: () => void
) => {
  if (users.some((item: User) => item.pseudo === user.pseudo)) {
    return alert('Ce pseudo est déjà pris :(');
  } else if (user.pseudo === '') {
    return alert(
      `Vous devez renseigner un pseudo pour passer à l'étape suivante`
    );
  } else if (users.some((item: User) => item.email === user.email)) {
    return alert(`Cet email n'est pas disponible`);
  } else if (user.email === '') {
    return alert(
      `Vous devez renseigner un email pour passer à l'étape suivante`
    );
  } else if (!user.email.includes('@')) {
    return alert(`L'email n'est pas au bon format`);
  } else if (user.password.length === 0) {
    return alert('Veuillez renseigner un mot de passe');
  } else if (user.password.length < 8) {
    return alert('Le mot de passe doit faire au minimum 8 caractères...');
  } else if (user.password !== user.surePassword) {
    return alert('Les mots de passe ne correspondent pas');
  } else callback();
};

export default conditionsSignIn01;
