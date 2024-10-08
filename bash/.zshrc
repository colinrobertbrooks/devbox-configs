# ZSH (https://github.com/ohmyzsh/ohmyzsh)
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="clean"
plugins=(
    Git
    History
    zsh-autosuggestions
)
source $ZSH/oh-my-zsh.sh

# Function to use Node version from package.json
use_node_from_package_json() {
  if [ -f package.json ]; then
    NODE_VERSION=$(cat package.json | grep '"node":' | sed -E 's/.*"node": "(.*)".*/\1/')
    if [ -n "$NODE_VERSION" ]; then
      nvm install "$NODE_VERSION"
      return
    fi
  fi
}

# Check for .nvmrc, then package.json, or use default
if [ -f .nvmrc ]; then
  nvm use
elif [ -f package.json ]; then
  use_node_from_package_json
else
  nvm use default
fi
