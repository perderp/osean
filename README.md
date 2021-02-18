# osean
Osean Otsu Young is the LP site for teams affiliated with the All Japan Youth Baseball League.



##### Table of Contents

- [Prerequisites](#Prerequisites)
- [Installing osean](#Installing)
- [Usage of osean](#Usage)
- [Contributing to osean](#Contributing)
- [Additional Info](#Additional)
  - [Breakpoints](#Breakpoints)
  - [Errors](#Erros)
- [Acknowledgements and References](#Acknowledgements)
- [Credits](#Credits)
- [Contribute](#Contribute)

## <a name='Prerequisites'></a> :pushpin: Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a `Windows 10` machine.

| Tool | Version | Description                                                                                  |
| ---- | ------- | -------------------------------------------------------------------------------------------- |
| Node | > 14.9.0  | Install node version via [NVM](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7) |

## <a name='Installing'></a> :rocket: Installing osean

To install osean in your local machine, run this following script in your terminal:

**Windows**:

```sh
git clone -b [your_branch] https://github.com/perderp/osean
```

## <a name='Usage'></a>:computer: Usage of osean

To begin the development, follow this steps listed below:

1. go to **`src/`** folder
2. run **`npm install`**
3. after the dependencies installed, run **`gulp build && gulp sync`**

##### Code Block:

```sh
cd src
npm install
gulp build
gulp sync
```

:warning: Note: Make changes only in **`src/`** folder. (Development)
:warning: Note: For Sending to FTP copy the **`public/`** folder (Production)

## <a name='Contributing'></a> :memo:Contributing to osean

Before cloning, create a [new branch](https://github.com/perderp/osean) for your local development.

To contribute to osean, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## <a name='Additional'></a> :paperclip: Additional Info

Additional information about osean.

- ### <a name='Breakpoints'></a>Breakpoints

  osean has a specified breakpoints on respective platforms:

  | Platform | Breakpoints   |
  | -------- | ------------- |
  | PC       | 769px up      |
  | tablet   | 481px - 768px |
  | Mobile   | 480px below   |

- ### <a name='Errors'></a>Errors

  If you encounter this problem `bash gulp command not found` consider this running this script in cmd

  ```sh
  npm install --global gulp-cli
  ```

  Installing the gulp in global scope.

## <a name='Acknowledgements'></a>:two_hearts: Acknowledgements and References



## <a name='Credits'></a> :mailbox: Credits

| Member                                        | Role     |
| --------------------------------------------- | -------- |
| [Jaspher ](https://github.com/perderp)        | Core Dev |
| [Dave ](https://github.com/DaveCanucot)        | Dev |


## <a name='Contribute'></a> :handshake:Contribute

Contributions, issues and feature requests are welcome!

- Issue Tracker: https://github.com/perderp/osean/issues
- Source Code: https://github.com/perderp/osean

---

Copyright © 2020 [HiPE Inc. ltd.](https://bpoc.co.jp/) All rights reserved
