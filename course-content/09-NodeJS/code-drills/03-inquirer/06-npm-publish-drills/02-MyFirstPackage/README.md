# **02-MyFirstPackage**

### To create an NPM package, we need *at least* a **local directory** and a **package.json.**

1. Create a local directory on your computer (you can even create it inside this directory, but it is better to locate it somewhere accessible). The name of this directory should be the intended name of your package:

    **`mkdir *foldername*`**

For this exercise, let's create a folder called "google" 
: **`mkdir google`**.

2. Navigate to your newly-created directory in terminal (`cd *foldername*`). In terminal, we will run a familiar command:

    **`npm init -y`**

3. This will create a **package.json** in our local directory. To officially publish a package on NPM, all we really need in our package.json are a *name* and a *version* field. 

4. We will edit our **package.json** to make sure the version is *1.0.0*. For the name, we will want the name to be scoped under our NPM username.

    **`"name": "@*yourusername*/google"`**

    This ensures that we will create the new NPM package under our name. It also allows us to name our packages with a name that already exists in NPM. For example, we could name our package *@myusername/axios*.

5. Let's try to publish this baby package that we just created! Run 
    
    **`npm publish`**

6. You should be met with a few errors that indicate that you don't have private package privileges. 

    This is because all scoped packages are initially set to private, which is useful if a company is designing an internal package for local use. To overcome this, we will open our package to the public:

    **`npm publish --access=public`**

7. **CONGRATULATIONS!!!** You've created your first NPM package! What does it do?!
 
    Nothing.

Let's change that.

<hr>

### **Proceed to 03-MyGoogle**