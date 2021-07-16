Harness Persona
---------------

A Laravel inspired ORM for Harness. Built on top of Bookshelf and Knex.

## Install

This package is automatically installed with the Harness Flex Framework.

```
npm i @harnessflex/persona
```

## Basic Usage

Creating a model

```js
import { Model } from '@harnessflex/persona'

class User < Model

    # The attributes that should be hidden for arrays.
    #
    # @type {string[]}

    get hidden
        [
            'password'
            'remember_token'
        ]
```

Accessing the model

```js

...

# Find first user...

User.find(1).then do(user)

    console.log user

```

> Visit https://bookshelfjs.org/ for more information.

Using the DB class

```js
import { DB } from '@harnessflex/persona'

DB.table('users').where('id', 1).first().then do(user)

    console.log user

```

> Visit https://knexjs.org/ for more information.

Security
--------

If you discover any security related issues, please email donaldpakkies@gmail.com instead of using the issue tracker.

License
-------

The MIT License (MIT). Please see [License File](LICENSE) for more information.
