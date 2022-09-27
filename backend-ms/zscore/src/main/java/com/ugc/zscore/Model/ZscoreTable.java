package com.ugc.zscore.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Date;


@Entity
@Table(name = "zscore")
@Getter
@Setter

public class ZscoreTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long z_id;

    @Column(name = "uni_code")
    private String uni_code;

    @Column(name = "uni_course")
    private String uni_course;

    @Column(name = "Colombo")
    private float colombo;

    @Column(name = "Gampaha")
    private float gampaha;

    @Column(name = "Kalutara")
    private float kalutara;

    @Column(name = "Matale")
    private float matale;

    @Column(name = "Kandy")
    private float kandy;

    @Column(name = "Nuwara_Eliya")
    private float nuwaraeliya;

    @Column(name = "Galle")
    private float galle;

    @Column(name = "Matara")
    private float matara;

    @Column(name = "Hambantota")
    private float hambantota;

    @Column(name = "Jaffna")
    private float jaffna;

    @Column(name = "Kilinochchi")
    private float kilinochchi;

    @Column(name = "Mannar")
    private float mannar;

    @Column(name = "Mullaitivu")
    private float mullaitivu;

    @Column(name = "Vavuniya")
    private float vavuniya;

    @Column(name = "Trincomalee")
    private float trincomalee;

    @Column(name = "Batticaloa")
    private float batticaloa;

    @Column(name = "Ampara")
    private float ampara;

    @Column(name = "Puttalam")
    private float puttalam;

    @Column(name = "Kurunegala")
    private float kurunegala;

    @Column(name = "Anuradhapura")
    private float anuradhapura;

    @Column(name = "Polonnaruwa")
    private float polonnaruwa;

    @Column(name = "Badulla")
    private float badulla;

    @Column(name = "Monaragala")
    private float monaragala;

    @Column(name = "Kegalle")
    private float kegalle;

    @Column(name = "Ratnapura")
    private float ratnapura;

    public ZscoreTable(Long z_id, String uni_code, String uni_course, float colombo, float gampaha, float kalutara, float matale, float kandy, float nuwaraeliya, float galle, float matara, float hambantota, float jaffna, float kilinochchi, float mannar, float mullaitivu, float vavuniya, float trincomalee, float batticaloa, float ampara, float puttalam, float kurunegala, float anuradhapura, float polonnaruwa, float badulla, float monaragala, float kegalle, float ratnapura) {
        this.z_id = z_id;
        this.uni_code = uni_code;
        this.uni_course = uni_course;
        this.colombo = colombo;
        this.gampaha = gampaha;
        this.kalutara = kalutara;
        this.matale = matale;
        this.kandy = kandy;
        this.nuwaraeliya = nuwaraeliya;
        this.galle = galle;
        this.matara = matara;
        this.hambantota = hambantota;
        this.jaffna = jaffna;
        this.kilinochchi = kilinochchi;
        this.mannar = mannar;
        this.mullaitivu = mullaitivu;
        this.vavuniya = vavuniya;
        this.trincomalee = trincomalee;
        this.batticaloa = batticaloa;
        this.ampara = ampara;
        this.puttalam = puttalam;
        this.kurunegala = kurunegala;
        this.anuradhapura = anuradhapura;
        this.polonnaruwa = polonnaruwa;
        this.badulla = badulla;
        this.monaragala = monaragala;
        this.kegalle = kegalle;
        this.ratnapura = ratnapura;
    }

    public ZscoreTable() {

    }

    public Long getZ_id() {
        return z_id;
    }

    public void setZ_id(Long z_id) {
        this.z_id = z_id;
    }

    public String getUni_code() {
        return uni_code;
    }

    public void setUni_code(String uni_code) {
        this.uni_code = uni_code;
    }

    public String getUni_course() {
        return uni_course;
    }

    public void setUni_course(String uni_course) {
        this.uni_course = uni_course;
    }

    public float getColombo() {
        return colombo;
    }

    public void setColombo(float colombo) {
        this.colombo = colombo;
    }

    public float getGampaha() {
        return gampaha;
    }

    public void setGampaha(float gampaha) {
        this.gampaha = gampaha;
    }

    public float getKalutara() {
        return kalutara;
    }

    public void setKalutara(float kalutara) {
        this.kalutara = kalutara;
    }

    public float getMatale() {
        return matale;
    }

    public void setMatale(float matale) {
        this.matale = matale;
    }

    public float getKandy() {
        return kandy;
    }

    public void setKandy(float kandy) {
        this.kandy = kandy;
    }

    public float getNuwaraeliya() {
        return nuwaraeliya;
    }

    public void setNuwaraeliya(float nuwaraeliya) {
        this.nuwaraeliya = nuwaraeliya;
    }

    public float getGalle() {
        return galle;
    }

    public void setGalle(float galle) {
        this.galle = galle;
    }

    public float getMatara() {
        return matara;
    }

    public void setMatara(float matara) {
        this.matara = matara;
    }

    public float getHambantota() {
        return hambantota;
    }

    public void setHambantota(float hambantota) {
        this.hambantota = hambantota;
    }

    public float getJaffna() {
        return jaffna;
    }

    public void setJaffna(float jaffna) {
        this.jaffna = jaffna;
    }

    public float getKilinochchi() {
        return kilinochchi;
    }

    public void setKilinochchi(float kilinochchi) {
        this.kilinochchi = kilinochchi;
    }

    public float getMannar() {
        return mannar;
    }

    public void setMannar(float mannar) {
        this.mannar = mannar;
    }

    public float getMullaitivu() {
        return mullaitivu;
    }

    public void setMullaitivu(float mullaitivu) {
        this.mullaitivu = mullaitivu;
    }

    public float getVavuniya() {
        return vavuniya;
    }

    public void setVavuniya(float vavuniya) {
        this.vavuniya = vavuniya;
    }

    public float getTrincomalee() {
        return trincomalee;
    }

    public void setTrincomalee(float trincomalee) {
        this.trincomalee = trincomalee;
    }

    public float getBatticaloa() {
        return batticaloa;
    }

    public void setBatticaloa(float batticaloa) {
        this.batticaloa = batticaloa;
    }

    public float getAmpara() {
        return ampara;
    }

    public void setAmpara(float ampara) {
        this.ampara = ampara;
    }

    public float getPuttalam() {
        return puttalam;
    }

    public void setPuttalam(float puttalam) {
        this.puttalam = puttalam;
    }

    public float getKurunegala() {
        return kurunegala;
    }

    public void setKurunegala(float kurunegala) {
        this.kurunegala = kurunegala;
    }

    public float getAnuradhapura() {
        return anuradhapura;
    }

    public void setAnuradhapura(float anuradhapura) {
        this.anuradhapura = anuradhapura;
    }

    public float getPolonnaruwa() {
        return polonnaruwa;
    }

    public void setPolonnaruwa(float polonnaruwa) {
        this.polonnaruwa = polonnaruwa;
    }

    public float getBadulla() {
        return badulla;
    }

    public void setBadulla(float badulla) {
        this.badulla = badulla;
    }

    public float getMonaragala() {
        return monaragala;
    }

    public void setMonaragala(float monaragala) {
        this.monaragala = monaragala;
    }

    public float getKegalle() {
        return kegalle;
    }

    public void setKegalle(float kegalle) {
        this.kegalle = kegalle;
    }

    public float getRatnapura() {
        return ratnapura;
    }

    public void setRatnapura(float ratnapura) {
        this.ratnapura = ratnapura;
    }

    @Override
    public String toString() {
        return "ZscoreTable{" +
                "z_id=" + z_id +
                ", uni_code='" + uni_code + '\'' +
                ", uni_course='" + uni_course + '\'' +
                ", colombo=" + colombo +
                ", gampaha=" + gampaha +
                ", kalutara=" + kalutara +
                ", matale=" + matale +
                ", kandy=" + kandy +
                ", nuwaraeliya=" + nuwaraeliya +
                ", galle=" + galle +
                ", matara=" + matara +
                ", hambantota=" + hambantota +
                ", jaffna=" + jaffna +
                ", kilinochchi=" + kilinochchi +
                ", mannar=" + mannar +
                ", mullaitivu=" + mullaitivu +
                ", vavuniya=" + vavuniya +
                ", trincomalee=" + trincomalee +
                ", batticaloa=" + batticaloa +
                ", ampara=" + ampara +
                ", puttalam=" + puttalam +
                ", kurunegala=" + kurunegala +
                ", anuradhapura=" + anuradhapura +
                ", polonnaruwa=" + polonnaruwa +
                ", badulla=" + badulla +
                ", monaragala=" + monaragala +
                ", kegalle=" + kegalle +
                ", ratnapura=" + ratnapura +
                '}';
    }
}
