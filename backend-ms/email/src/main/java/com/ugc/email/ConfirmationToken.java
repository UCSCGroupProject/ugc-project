package com.ugc.email;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "confirmationToken")
public class ConfirmationToken {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "token_id")
    private long tokenid;

    @Column(name = "confirmation_token")
    private String confirmationToken;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @OneToOne(targetEntity = UserEntity.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private UserEntity userEntity;

    public ConfirmationToken() {
    }

    public ConfirmationToken(UserEntity userEntity) {
        this.userEntity = userEntity;
        createdDate = new Date();
        confirmationToken = UUID.randomUUID().toString();
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public long getisEnabled() {
        return tokenid;
    }

    public void settokenid(long tokenid) {
        this.tokenid = tokenid;
    }

    public String getconfirmationToken() {
        return confirmationToken;
    }

    public void setconfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
    }

    public Date getcreatedDate() {
        return createdDate;
    }

    public void setcreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
}
