## CI/CD for the Python project

Imaginary situation of 6 people working on a Python project which will be released soon. Below is highlighted some
thoughts regarding CI/CD in terms of a Python project.

### Linting, testing and building

In order to maintain high-quality Python code it's important to take code quality into account and improve it. We can
divide this topic into two categories; code style and linters. For maintaining a good code style there's two good
candidates:
[Black](https://github.com/psf/black) and [Isort](https://github.com/PyCQA/isort). What comes to linters there's a few
alternatives. I would recommend the following:

* [Flake8](https://flake8.pycqa.org/en/latest/)
* [Pylint](https://pylint.org/)
* [Mypy]() (it is highly recommended to use type hints/annotations and let the Mypy to statically type check your code
  base)
* [Bandit]()? (if security is something that concerns you)

It is really important to have proper (and clean) tests which are executed frequently. De facto standard for the unit
testing is [Pytest](https://docs.pytest.org/en/6.2.x/) and it also contains large collection of external plugins. In
addition to Pytest,
[RobotFramework](https://robotframework.org/) is a really good alternative for building integration and e2e tests. Also,
because it's built using Python it can be integrated to the code base seamlessly.
Lastly, [Hypothesis](https://hypothesis.readthedocs.io/en/latest/) is something to take into consideration.

For building python project my approach would be to use [Pipenv](https://pipenv.pypa.io/en/latest/)
and [Docker](https://www.docker.com/) together.

### CI Alternatives

Below is listed some good alternatives for the CI besides Jenkins and Github:

* [TravisCI](https://www.travis-ci.com/)
* [CircleCI](https://circleci.com/)
* [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/)
* [TeamCity by JetBrains](https://www.jetbrains.com/teamcity/)
* [Azure pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/)
* [AWS Code pipeline](https://aws.amazon.com/codepipeline/)

### CI Setup

At the end of the day all these CI setups will most probably get the job done. Obviously there are some variation
between these tools and the features they provide. I have used Jenkins many years, so I would argue that it is not that
hard to use compared to e.g. Github actions. But, what I like about these cloud-based environments is that it abstracts
the environment and user don't have to worry about that. In addition, I like the fact that the source code(repository)
in the same place where the CI system is
(don't have fetch/pull repos before doing anything else). 

