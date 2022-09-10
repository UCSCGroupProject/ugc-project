package com.ugc.crypto.utils.block;

import com.ugc.crypto.model.StudentRecord;
import com.ugc.crypto.utils.hashing.SHA256Helper;
import com.ugc.crypto.utils.merletree.MerkelTree;
import com.ugc.crypto.utils.signing.ECDSAHelper;
import lombok.Getter;
import lombok.Setter;

import java.security.PrivateKey;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class Block {
    private int id;
    private List<StudentRecord> studentRecords;
    private String creatorName;
    private String creatorAddress;
    private String creatorPublicKey;
    private String creatorSignature;
    private String hash;
    private long timeStamp;

    public Block(int id, List<StudentRecord> studentRecords, String creatorName, String creatorAddress, String creatorPublicKey){
        this.id = id;
        this.studentRecords = studentRecords;
        this.creatorName = creatorName;
        this.creatorAddress = creatorAddress;
        this.creatorPublicKey = creatorPublicKey;
        this.timeStamp = new Date().getTime();
        generateHash();
    }

    public List<String> transformTransactionsForMerkelTree(){
        List<String> studentRecordList = new ArrayList<>();

        for (StudentRecord studentRecord: studentRecords) {
            studentRecordList.add(studentRecord.toString());
        }

        return studentRecordList;
    }

    public void generateHash(){
        // Generate merkle root fot the transactions
        List<String> merkelList = transformTransactionsForMerkelTree();
        MerkelTree merkelTree = new MerkelTree(merkelList);
        String merkelRoot = merkelTree.getMerkelRoot().get(0);

        String dataToHash = Integer.toString(id) + merkelRoot + creatorName + creatorAddress + creatorPublicKey + creatorSignature + Long.toString(timeStamp);

        String hashValue = SHA256Helper.generateHash(dataToHash);

        this.hash = hashValue;
    }

    public void generateSignature(PrivateKey privateKey){
        String data = this.hash;
        String signature = ECDSAHelper.applyECDSASignature(privateKey, data);

        this.creatorSignature = signature;
    }

    public boolean verifySignature(String publicKey, String signature){
        String data = this.hash;

        return ECDSAHelper.verifyECDSASignature(publicKey, data, signature);
    }

    public boolean verifyBlock(){
        return verifySignature(this.creatorPublicKey, this.creatorSignature);
    }


    @Override
    public String toString(){
        return
                "--------------------------------- BLOCK -------------------------------------\n"+
                "Id: " + this.id + "\n" +
                "Student record:  \n" + printTransactions(studentRecords) +
                "Creator details:" + "\n" +
                "\tName:\t\t" + this.creatorName + "\n" +
                "\tAddress:\t" + this.creatorAddress + "\n" +
                "\tPublic key:\t" + this.creatorPublicKey + "\n" +
                "\tSignature:\t" + this.creatorSignature + "\n" +
                "Hash:\t\t" + this.hash + "\n" +
                "-----------------------------------------------------------------------------\n";
    }

    public String printTransactions(List<StudentRecord> studentRecords){
        String studentRecordList = "";

        for (StudentRecord studentRecord: studentRecords)
            studentRecordList = studentRecordList + "\t" + studentRecord + '\n';

        return  studentRecordList;
    }
}
