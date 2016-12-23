//new broadcast stuff
var messages = ["You find yourself in a room...Use arrow keys to move the @ symbol(you)"];
var addMessage = function (m){
    messages.push(m);
    theForm.o_messages.value = "";
    if(messages.length !== 0 && theForm.o_messages !== undefined)
    {
        for(var i = messages.length-1; i >= 0; i--)
        {
            theForm.o_messages.value += messages[i] + "\n\n";
        }
    } else
    {
        theForm.o_messages.value = m;
    }

    theForm.o_messages.value += "\n\n";
};

//The WORLD code
var theForm;
var player = {
    x: 16,
    y: 16,
    px: 16,
    py: 16,
    b_control: true,
    keys: 0
};
//OBJS
var Level = function (w, player){
    this.world = w;
    this.pDat = player;
};

var Wall = function(){
    this.act= function (){
        player.x = player.px;
        player.y = player.py;
        player.b_control = true;
        addMessage("You crash into a large stone wall with strange inscriptions on it. You find no way through...");
    };
    this.c = function (){
        return "W";
    };
};
var Slide = function(){
    this.act = function (){
        var tmpx = player.x;
        var tmpy = player.y;

        player.x += (player.x - player.px);
        player.y += (player.y - player.py);

        player.px = tmpx;
        player.py = tmpy;

        addMessage("You walk into a strange slimy substance and can no longer control your direction...");
        if(player.y >=0 && player.x >= 0 && player.y <= BOUNDS.y && player.x <= BOUNDS.x)
        {
            world[BOUNDS.y-player.y][player.x].act();
        } else
        {
            player.x = player.px;
            player.y = player.py;
        }


    };
    this.c = function (){
        return "_";
    };
};
var Key = function(){
    this.hasKey = true;
    this.rchar = "+"
    this.act = function (){
        if(this.hasKey)
        {
            player.keys ++;
            theForm.o_keys.value = player.keys;
            this.hasKey = false;
            addMessage("You find an key shining dully on the ground...")
            this.rchar = "*";
        }
    };
    this.c = function (){
        return this.rchar;
    };
};
var None = function ()
{
    this.act = function ()
    {
        player.b_control = true;
    };
    this.c = function()
    {
        return "*";
    };
};
var Door = function ()
{
    this.opened = false;
    this.rchar = "D";
    this.act = function ()
    {
        if(!this.opened)
        {
            if(player.keys > 0)
            {
                player.keys--;
                theForm.o_keys.value = player.keys;
                this.opened = true;
                this.rchar = "*";
                player.x = player.px;
                player.y = player.py;
                addMessage("You put a key in a strange hole and the door opens slowly...")
            } else
            {
                player.x = player.px;
                player.y = player.py;
                addMessage("You run into a large door with an obvious hole for some sort of key...")
            }
        }

    };
    this.c = function ()
    {
        return this.rchar;
    };
};
var End = function ()
{
    this.act = function ()
    {
        addMessage("You step up the ladder..");
        if(data.length-1 > level)
        {
            level ++;
        }
        world = data[level].world;

        var tmpkeys = player.keys;
        player = data[level].pDat;
        player.keys = tmpkeys;

        u_messages = true;
        addMessage(ptMessages[level]);
        theForm.o_map.value = "";
    };
    this.c = function ()
    {
        return "L";
    }
};
//DECLARATION
var data = [
    new Level([
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new Key(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new Wall(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new Door, new Wall(), new Wall(), new Wall(), new Wall(), new Wall() ],
            [new None(), new None(), new None(), new Wall(), new Wall(), new Wall(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new None(), new End(), new None(), new None(), new None(), new None() ]],
        {
            x: 0,
            y: 0,
            px: 0,
            py: 0,
            b_control: true,
            keys: 0
        }),
    new Level([
            [new End(), new None(), new None(), new Wall(), new None(), new Key(), new None(), new Key(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new Wall(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new Door(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall() ],
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new Key(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None, new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new Wall(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None()/**p*/ , new None(), new None(), new None(), new None() ]],
        {
            x: 8,
            y: 0,
            px: 0,
            py: 0,
            b_control: true,
            keys: 0
        }),
    new Level([
            [new None(), new None(), new Wall(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new Wall() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new Wall() ],
            [new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new None(), new Wall() ],
            [new Wall(), new Wall(), new Wall(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new Wall(), new Wall() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new Door(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall() ],
            [new None(), new None(), new None(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new Slide(), new Slide(), new Slide(), new Key, new Slide(), new Wall(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Wall(), new Door(), new Wall() ],
            [new None(), new None(), new None(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Wall(), new Door(), new Wall() ],
            [new None(), new None(), new None(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Wall(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide() , new Wall(), new Wall(), new None(), new End() ]],
        {
            x: 0,
            y: 12,
            px: 0,
            py: 0,
            b_control: true,
            keys: 0
        }),
    new Level([
            [new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new None(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide() ],
            [new Slide(), new End(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide() ],
            [new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide() ],
            [new Slide(), new Slide(), new Slide(), new Wall(), new Door(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall() ],
            [new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide() ],
            [new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide() ],
            [new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide() ],
            [new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Wall(), new Slide(), new None(), new Slide(), new Slide(), new Slide(), new Slide() ],
            [new Slide(), new Wall(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide() ],
            [new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide() ],
            [new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Key(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide() ],
            [new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide() ],
            [new Slide(), new Slide(), new Slide(), new Wall(), new Wall(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide(), new Slide() ]],
        {
            x: 12,
            y: 0,
            px: 0,
            py: 0,
            b_control: true,
            keys: 0
        }),
    new Level([
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new Key(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new Wall(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new Door, new Wall(), new Wall(), new Wall(), new Wall(), new Wall() ],
            [new None(), new None(), new None(), new Wall(), new Wall(), new Wall(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new None(), new None(), new None(), new None(), new None(), new None() ],
            [new None(), new None(), new None(), new None(), new None(), new None(), new Wall(), new None(), new End(), new None(), new None(), new None(), new None() ]],
        {
            x: 0,
            y: 0,
            px: 0,
            py: 0,
            b_control: true,
            keys: 0
        }),
];
var BOUNDS = {
    x: 12,
    y: 12
};
var world = [[]]; //a whole bunch of objs (keys, slides etc)
var level = 0;
var _input = 0;


// //INITALIZATION
// world = data[0].world;
// player = data[0].pDat;

function initialize()
{
    theForm = document.getElementById("iFORM");
    theForm.o_messages.value = messages[0];
    world = data[0].world;
    player = data[0].pDat;
    theForm.o_map.value = worldToText();
};

//FUNCTIONS
//----player movement
var movePlayer = function (form){
    if(player.b_control)
    {
        switch(_input)
        {
            case 65:
                player.px = player.x;
                player.py = player.y;
                player.x -= 1;
                break;
            case 87:
                player.px = player.x;
                player.py = player.y;
                player.y += 1;
                break;
            case 68:
                player.px = player.x;
                player.py = player.y;
                player.x += 1;
                break;
            case 83:
                player.px = player.x;
                player.py = player.y;
                player.y -= 1;
                break;
        }
    }
    if(player.x > BOUNDS.x || player.y > BOUNDS.y || player.y < 0 || player.x < 0)
    {
        player.x = player.px;
        player.y = player.py;
    }
};

var worldToText = function ()
{
    var string = "";
    for(var i = 0; i < world.length; i ++)
    {

        for(var j = 0; j < world[i].length; j++)
        {
            if(j === player.x && i === BOUNDS.y-player.y)
            {
                string += "@   ";
            } else
            {
                if(world[i][j].c !== undefined)
                {
                    string += world[i][j].c() + "   ";
                } else
                {
                    string += "*   ";
                }

            }


        }
        string += "\n\n";
    }
    // for(var i = 0; i < BOUNDS.y-player.y; i++)
    // {
    // 	string += "\n\n";
    // }
    // for(var i = 0; i < player.x; i ++)
    // {
    // 	string += "      ";
    // }
    // string += "@";

    return string;
};
//start
document.addEventListener('keydown', function(event) {
    _input = event.keyCode;

    movePlayer(theForm);

    //---action
    try
    {
        world[BOUNDS.y-player.y][player.x].act();
    }catch(e)
    {

    }

    //--------output
    theForm.o_map.value = worldToText();
});