export const hasRole = state => {
  return (roles, checkAdmin = false) => {
    if (!roles || !state.user || !state.user.roles) {
      return false;
    }

    if (!Array.isArray(roles)) {
      roles = [roles];
    }

    if (checkAdmin && state.user.roles.indexOf('admin') !== -1) {
      return true;
    }

    return state.user.roles.some(a => roles.some(b => a === b));
  }
};

export const hasAccess = (state, getters) => {
  return roles => getters.hasRole(roles, true);
};

export const isAdmin = (state, getters) => {
  return getters.hasRole('admin');
};

export const isManager = (state, getters) => {
  return getters.hasRole('manager');
};

export const isFinancial = (state, getters) => {
  return getters.hasRole('financial');
};

export const isSupport = (state, getters) => {
  return getters.hasRole('support');
};
