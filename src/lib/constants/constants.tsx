export const Constants = {
  AUTH: {
    FOOTER: {
      CONTINUE_WITH: "",
      ALREADY_HAVE_ACCOUNT: "",
      DONT_HAVE_ACCOUNT: "",
      SIGN_UP_HERE: "",
      SIGN_IN_HERE: "",
    },
  },

  LOGIN: {
    HEADER: {
      TITLE: "Welcome to KChat!",
      SUBTITLE: "Let the chatting begin!",
    },
    FORM: {
      EMAIL_LABEL: "Email Address",
      EMAIL_PLACEHOLDER: "your@email.com",
      PASSWORD_LABEL: "Password",
      PASSWORD_PLACEHOLDER: "******",
      FORGOT_PASSWORD: "Forgot your password?",
      ACTION_BUTTON_LABEL: "Sign In",
    },
  },

  REGISTER: {
    HEADER: {
      TITLE: "Welcome to KChat!",
      SUBTITLE: "Create your Kchat account",
    },
    FORM: {
      NAME_LABEL: "Full Name",
      NAME_PLACEHOLDER: "Your full name",
      EMAIL_LABEL: "Email Address",
      EMAIL_PLACEHOLDER: "your@email.com",
      PASSWORD_LABEL: "Password",
      PASSWORD_PLACEHOLDER: "******",
      CONFIRM_PASSWORD_LABEL: "Confirm Password",
      CONFIRM_PASSWORD_PLACEHOLDER: "******",
      ACTION_BUTTON_LABEL: "Create Account",
    },
  },
} as const;
