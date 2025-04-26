import IncidentModel from "../Models/Incident.js";

// POST Incident
export const postIncident=async(req,res)=>{
    try {
        const {title,description,severity}=req.body;
        if(!title || !description || !['Low', 'Medium', 'High'].includes(severity)){
            return res.status(400).json({
                message:'Invalid input'
            });
        }   
        const incident=new IncidentModel({title,description,severity});
        await incident.save();
        res.status(201).json({
            success:true,
            message:"Incident posted successfully",
            incident
        })
    }catch (error) {
        console.error("Error fetching posting Incidents:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

// Get ALL Incident
export const getAllIncident=async(req,res)=>{
    try{
        const incident=await IncidentModel.find().sort({reported_at:-1});
        return res.status(200).json({
            success:true,
            message:"All Incidents fetched successfully.",
            incident
        })   
    }catch (error) {
        console.error("Error fetching all Incidents:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

// Get Incident By ID
export const getIncidentById=async(req,res)=>{
    try {
        const {id}=req.params;
        const incident=await IncidentModel.findById(id);
        if(!incident){
            return res.status(404).json({
                success:false,
                message:"Incident not found."
            })
        }
        return res.status(200).json({
            success:true,
            message:"Incident fetched successfully.",
            data:incident
        });
    }catch (error) {
        console.error("Error fetching Incident by ID:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

// Delete an Incident
export const deleteIncident=async(req,res)=>{
    try {
        const incident=await IncidentModel.findByIdAndDelete(req.params.id); 
        if(!incident){
            return res.status(404).json({
                success:false,
                message: 'Not found' 
            });  
        }
        return res.status(200).json({
            success:true,
            message: 'Incident deleted'
        });
    }catch (error) {
        console.error("Error Deleting Incident:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}