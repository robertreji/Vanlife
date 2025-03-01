export  async function  FetchVanData(id)
{        const url=id? `/api/vans/${id}`:"/api/vans"   
        const response=await fetch(url)
        if(!response.ok)
        {
            throw{
                message:"failse to fetch vans",
                statusText:response.statusText,
                status:response.status
            }
        }
        const json= await response.json()
       
    return(json.vans)
}

export  async function  getHostVans(id)
{        const url=id? `/api/host/vans/${id}`:"/api/host/vans"   
        const response=await fetch(url)
        if(!response.ok)
        {
            throw{
                message:"failse to fetch vans",
                statusText:response.statusText,
                status:response.status
            }
        }
        const json= await response.json()
    return(json.vans)
}

