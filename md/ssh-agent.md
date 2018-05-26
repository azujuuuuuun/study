# ssh-agent

SSH接続時にパスフレーズを入力したくないので、ssh-agentを起動し、パスフレーズを解除した秘密鍵をssh-agentに渡している
```
number_of_ssh_agent=$(echo `ps -ef | grep ssh-agent | grep -v grep | grep -v /usr/bin/ssh-agent | wc -l`)
if [ $number_of_ssh_agent = 0 ]; then
  eval `ssh-agent`
  ssh-add -K '~/.ssh/id_rsa'
fi
```

ssh-agentをkill
```.zlogout
$number_of_shell=$(echo `ps -ef | grep zsh | grep -v grep | wc -l`)
if [ $number_of_shell = 1]; then
  ssh-agent -k
fi
```
