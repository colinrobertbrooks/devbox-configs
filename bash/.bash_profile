# default editor
export EDITOR="code -w"

# bash-completion
[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion

# nvm mac
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# nvm windows
# export NVM_DIR=~/.nvm
# source ~/.nvm/nvm.sh