
function display_table()
{

    var table = document.querySelector("#table_num").value;
    var size = document.querySelector("#table_size").value;
    var sort = document.querySelector("#table_sort").value;
    var options = document.querySelector("#table_options").value;
    var result_area = document.querySelector(".result_div");

    switch(sort)
    {
        case "asc":
            {
                var str = "";
                for(i=1;i<=size;i++)
                {
                    str+=option_types(options, table, i); 
                }
                result_area.innerHTML = str;
                break;
            }

        case "desc":
            {
                var str = "";
                for(i=size;i>=1;i--)
                {
                    str+=option_types(options, table, i); 
                }
                result_area.innerHTML = str;
                break;
            }
    }
}

function option_types(options, table, i)
{
    var str = "";
    if(options == 'all_num')
    {
        str+=table+"x"+i+"="+(table*i)+"<br/>";
    }
    if(options=='even_num')
    {
        if(i%2==0)	
            str+=table+"x"+i+"="+(table*i)+"<br/>";
        
    }
    if(options=='odd_num')
    {
        if(i%2!=0)	
            str+=table+"x"+i+"="+(table*i)+"<br/>";
        
    }
    return str;
}