function avatarLetters(name) {
  const parts = name.split(/\s/);
  return parts[0][0] + parts[parts.length - 1][0];
}

export default function install(Vue) {
  Object.defineProperty(Vue.prototype, '$avatarLetters', {
    get() {
      return avatarLetters;
    }
  });
}
